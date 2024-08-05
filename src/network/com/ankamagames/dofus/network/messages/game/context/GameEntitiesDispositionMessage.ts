import { IdentifiedEntityDispositionInformations } from "./../../../types/game/context/IdentifiedEntityDispositionInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameEntitiesDispositionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7948;

	public dispositions: Array<IdentifiedEntityDispositionInformations>;

    public constructor()
    {
        super();
        this.dispositions = Array<IdentifiedEntityDispositionInformations>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameEntitiesDispositionMessage(input);
    }

    private deserializeAs_GameEntitiesDispositionMessage(input: ICustomDataInput)
    {
        let _item1: IdentifiedEntityDispositionInformations;
        let _dispositionsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _dispositionsLen; _i1++)
        {
            _item1 = new IdentifiedEntityDispositionInformations();
            _item1.deserialize(input);
            this.dispositions.push(_item1);
        }
    }

}