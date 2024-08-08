import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { CharacterSelectionMessage } from "./CharacterSelectionMessage";

export class CharacterFirstSelectionMessage extends CharacterSelectionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7638;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public doTutorial: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterFirstSelectionMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterFirstSelectionMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterFirstSelectionMessage.endpointServer;
    }

    public initCharacterFirstSelectionMessage(id: number = 0, doTutorial: boolean = false): CharacterFirstSelectionMessage
    {
        super.initCharacterSelectionMessage(id);
        this.doTutorial = doTutorial;
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
        this.serializeAs_CharacterFirstSelectionMessage(output);
    }

    public serializeAs_CharacterFirstSelectionMessage(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterSelectionMessage(output);
        output.writeBoolean(this.doTutorial);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterFirstSelectionMessage(input);
    }

    private deserializeAs_CharacterFirstSelectionMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._doTutorialFunc(input);
    }

    private _doTutorialFunc(input: ICustomDataInput)
    {
        this.doTutorial = input.readBoolean();
    }

}