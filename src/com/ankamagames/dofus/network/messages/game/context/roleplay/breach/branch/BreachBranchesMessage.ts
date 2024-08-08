import { ExtendedBreachBranch } from "./../../../../../../types/game/context/roleplay/breach/ExtendedBreachBranch";
import { ProtocolTypeManager } from "./../../../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class BreachBranchesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1486;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public branches: Array<ExtendedBreachBranch>;

    public constructor()
    {
        super();
        this.branches = Array<ExtendedBreachBranch>();
    }

    public getMessageId()
    {
        return BreachBranchesMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachBranchesMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachBranchesMessage.endpointServer;
    }

    public initBreachBranchesMessage(branches: Array<ExtendedBreachBranch> = null): BreachBranchesMessage
    {
        this.branches = branches;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_BreachBranchesMessage(output);
    }

    public serializeAs_BreachBranchesMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.branches.length);
        for(var _i1: number = 0; _i1 < this.branches.length; _i1++)
        {
            output.writeShort((this.branches[_i1] as ExtendedBreachBranch).getTypeId());
            (this.branches[_i1] as ExtendedBreachBranch).serialize(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachBranchesMessage(input);
    }

    private deserializeAs_BreachBranchesMessage(input: ICustomDataInput)
    {
        let _id1: number = 0;
        let _item1: ExtendedBreachBranch;
        let _branchesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _branchesLen; _i1++)
        {
            _id1 = input.readUnsignedShort();
            _item1 = ProtocolTypeManager.getInstance(ExtendedBreachBranch,_id1);
            _item1.deserialize(input);
            this.branches.push(_item1);
        }
    }

}