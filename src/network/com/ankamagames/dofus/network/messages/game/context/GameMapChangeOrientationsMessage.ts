import { ActorOrientation } from "./../../../types/game/context/ActorOrientation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapChangeOrientationsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3256;

	public orientations: Array<ActorOrientation>;

    public constructor()
    {
        super();
        this.orientations = Array<ActorOrientation>();
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
        this.deserializeAs_GameMapChangeOrientationsMessage(input);
    }

    private deserializeAs_GameMapChangeOrientationsMessage(input: ICustomDataInput)
    {
        let _item1: ActorOrientation;
        let _orientationsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _orientationsLen; _i1++)
        {
            _item1 = new ActorOrientation();
            _item1.deserialize(input);
            this.orientations.push(_item1);
        }
    }

}